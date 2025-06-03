/** 
|--------------------------------------------------------------------------
| Storage Service Documentation
|--------------------------------------------------------------------------
|
| Supabase-powered media storage service for video management
|
| CORE FUNCTIONALITY
| 1. Client Configuration:
|    - URL: https://supabase.twh.dreamcare.ai
|    - Anonymous role authentication
|    - Disabled session persistence
|
| 2. Video Operations:
|    - getVideos(): Lists available videos
|    - getVideoUrl(): Generates public URLs
|    - getSignedVideoUrl(): Creates time-limited URLs
|
| SECURITY PROTOCOLS
| 1. Authentication:
|    - JWT-based anonymous access
|    - Auto token refresh disabled
|    - No session persistence
|
| 2. Data Protection:
|    - Bucket: team_work_health
|    - Folder: videos-lib/Website
|    - Signed URLs expire after 7 days
|
| 3. Risk Mitigation:
|    - API key exposed (should use environment variables)
|    - No user-generated content uploads
|    - File extension validation
|
| PERFORMANCE
| - Connection: Single client instance
| - Caching: No built-in cache layer
| - Limits: 100 file listing limit
|
| BEST PRACTICE IMPROVEMENTS
| 1. Security:
|    - Move API key to environment variables
|    - Implement error monitoring
|    - Add request rate limiting
|
| 2. Functionality:
|    - Add video metadata support
|    - Implement pagination for large libraries
|    - Add MIME type validation
|
| 3. Reliability:
|    - Add retry logic for failed requests
|    - Implement local cache fallback
|    - Add health check method
|
| MAINTENANCE GUIDE
| 1. Configuration Changes:
|    - Update supabaseUrl if endpoint changes
|    - Rotate API keys quarterly
|
| 2. Storage Structure:
|    - Maintain /videos-lib/Website path
|    - Keep consistent naming conventions
|
| 3. Error Handling:
|    - Monitor console.error outputs
|    - Add user-facing error messages
|
| VERSION COMPATIBILITY
| Supabase-js: ^2.0.0
| Angular: ≥12.0.0
| Last Updated: 2023-11-07
|
| COPYRIGHT & LICENSE
| © 2025 Dream Care <DreamCare@gmail.com>
| GitHub: @DreamCare ▸ MIT Licensed
|--------------------------------------------------------------------------
*/

import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    supabaseUrl = 'https://supabase.twh.dreamcare.ai';
    supabaseKey =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyAgCiAgICAicm9sZSI6ICJhbm9uIiwKICAgICJpc3MiOiAic3VwYWJhc2UtZGVtbyIsCiAgICAiaWF0IjogMTY0MTc2OTIwMCwKICAgICJleHAiOiAxNzk5NTM1NjAwCn0.dc_X5iR_VP_qT0zsiyj_I_OZ2T9FtRU2BBNWN8Bu4GE';

    public supabaseClient: SupabaseClient;

    constructor() {
        this.supabaseClient = createClient(
            this.supabaseUrl,
            this.supabaseKey,
            { auth: { autoRefreshToken: false, persistSession: false } } // Disable persistence
        );
    }

    async getVideos() {
        const { data, error } = await this.supabaseClient.storage
            .from('team_work_health') // Your bucket name
            .list('videos-lib/Website', { limit: 100 }); // List files inside the "video-libs" folder

        if (error) {
            console.error('Error fetching videos:', error);
            return [];
        }

        // Filter video files (based on file extension or MIME type)
        const videoFiles = data.filter(
            (file) =>
                file.name.endsWith('.mp4') ||
                file.name.endsWith('.avi') ||
                file.name.endsWith('.mov')
        );

        return videoFiles;
    }

    // Method to get a video file's URL (for playback or download)
    getVideoUrl(fileName: string) {
        const { data } = this.supabaseClient.storage
            .from('team_work_health') // Your bucket name
            .getPublicUrl(`videos-lib/Website/${fileName}`); // Add folder name to the file path
        return data.publicUrl;
    }

    async getSignedVideoUrl(fileName: string) {
        const { data, error } = await this.supabaseClient.storage
            .from('team_work_health')
            .createSignedUrl(`videos-lib/Website/${fileName}`, 60 * 60 * 24 * 7); // URL valid for 7 days

        if (error) {
            console.error('Error getting signed video URL:', error);
            return '';
        }

        // Return the signed URL
        return data.signedUrl;
    }
}
