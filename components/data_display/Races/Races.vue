<template>
    <div class="text-wrapper p-4 border-2 border-gray-300 rounded-lg shadow-md transition duration-300 ease-in-out hover:bg-gray-100 active:bg-gray-200 cursor-pointer">
        <div class="media-content">
            <div class="flex flex-col space-y-2">
                <div><strong>Race {{ race.race_num }}</strong></div>
                <div>Race Type: {{ race.race_type }}</div>
                <div>Post Time: {{ race.post_time }}</div>
                <div>Distance: {{ race.distance }}</div>
                <div>Surface: {{ race.surface }}</div>
                <div v-if="race.top_picks_from_bookmaker_odds && race.top_picks_from_bookmaker_odds.length > 0">
                    <div class="font-semibold mt-2">Top 3 Bookmaker Picks:</div>
                    <div class="flex flex-col">
                        <div v-for="(horse, index) in race.top_picks_from_bookmaker_odds.slice(0, 3)" :key="horse.equibase_refid">
                            {{ horse.name }} ({{ horse.odds || '?' }})
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Race',
    props: ['race']
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
