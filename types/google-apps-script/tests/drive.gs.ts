/**
 * Copyright Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/// <reference types="gapi.client.appsactivity" />
// [START drive_activity_quickstart]
/**
 * Lists activity for a Drive user.
 */
var Client: typeof gapi.client;
var AppsActivity = {
    Activities: Client.activities
};
function listActivity() {
    var optionalArgs = {
        'source': 'drive.google.com',
        'drive.ancestorId': 'root',
        'pageSize': 10
    };
    var response = AppsActivity.Activities.list(optionalArgs) as gapi.client.appsactivity.ListActivitiesResponse;
    var activities = response.activities;
    if (activities && activities.length > 0) {
        Logger.log('Recent activity:');
        for (var i = 0; i < activities.length; i++) {
            var activity = activities[i];
            var event = activity.combinedEvent;
            var user = event.user;
            var target = event.target;
            if (user == null || target == null) {
                continue;
            } else {
                var time = new Date(Number(event.eventTimeMillis));
                Logger.log('%s: %s, %s, %s (%s)', time, user.name,
                    event.primaryEventType, target.name, target.mimeType);
            }
        }
    } else {
        Logger.log('No recent activity');
    }
}
// [END drive_activity_quickstart]
