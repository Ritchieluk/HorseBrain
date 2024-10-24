<template>
    <div class="text-wrapper p-4 border-2 border-gray-300 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 cursor-pointer">
        <div class="media-content">
            <nuxt-link
            :to="{
              name: 'racelist-date-id',
              params: {
                date: raceday.date,
                id: raceday.track_id
              }
            }"
            >
            <span class="font-medium">{{ raceday.id }}</span>

            <div class="flex flex-col space-y-2">
                <h4><span class="font-bold">{{ raceday.track_name }}</span></h4>
                <div class="track-details">
                    <p><strong>Date: </strong> {{ raceday.date }}</p>
                    <p><strong>Number of Races:</strong> {{ raceday.num_races }}</p>
                    <p><strong>Post Time: </strong>{{ raceday.post_time }}</p>
                </div>
            </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Raceday',
    props: ['raceday']
}
</script>

<style scoped>
.text-wrapper:hover {
    background-color: var(--contrast-color);
}

.text-wrapper:active {
    background-color: #5c6ed4;
}

.track-details {
    font-family: "Times New Roman", Times, serif;
    font-size: 18px;
    font-weight: 450;
}
</style>
