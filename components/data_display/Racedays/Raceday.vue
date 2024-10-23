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
                <div>Track Name: <span class="font-bold">{{ raceday.track_name }}</span></div>
                <div>Date: {{ raceday.date }}</div>
                <div>Number of Races: {{ raceday.num_races }}</div>
                <div>Post Time: {{ raceday.post_time }}</div>
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
    background-color: #5c6ed4;
}

.text-wrapper:active {
    background-color: #5c6ed4;
}
</style>
