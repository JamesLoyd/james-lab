import { ListToTask } from "./ListToTask";

export const Tabs = () => {
    return (
    <>
    <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#listToTaskList" type="button" role="tab" aria-controls="profile" aria-selected="false">List to Tasklist</button>
        </li>
        <li class="me-2" role="presentation">
            <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-target="#other-tool" type="button" role="tab" aria-controls="profile" aria-selected="false">Some Other Tool</button>
        </li>
    </ul>
</div>
<div id="default-tab-content">
    <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="listToTaskList" role="tabpanel" aria-labelledby="profile-tab">
    <p class="text-4xl text-green-700 text-center py-20">Convert a list to a task list!</p>
        <ListToTask />
    </div>
        <div class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="other-tool" role="tabpanel" aria-labelledby="profile-tab">
    <p class="text-4xl text-green-700 text-center py-20">Another tool would come here</p>
    </div>
</div>
</>
); }