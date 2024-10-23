<template>
  <div class="p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="race in races" :key="race.race_number">
        <Race :race="race" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import { useRoute } from 'vue-router'
  import mongoApi from '~/api/mongo_api'
  import Race from './Races.vue'

  interface Race {
    race_number: string
    race_type: string
    post_time: string
    distance: string
    surface: string
    top_picks_from_bookmaker_odds: any[]
  }

  const races = ref<Race[]>([])
  const loading = ref(false)
  const error = ref('')
  const route = useRoute()

  async function fetchRaces() {
    loading.value = true
    error.value = ''
    try {
      const track_id = route.params.id as string
      const date = route.params.date as string
      const fetchedRaces = await mongoApi.fetchRacePreviewsByTrackAndDate(track_id, date)
      races.value = fetchedRaces.map((race: any) => ({
        race_num: race.race_num,
        race_type: race.race_type,
        post_time: (() => {
          const time = race.post_time.split('T')[1].split('.')[0];
          const [hours, minutes] = time.split(':');
          const ampm = 'PM';
          const formattedHours = hours % 12 || 12;
          return `${formattedHours}:${minutes}${ampm}`;
        })(),
        distance: race.distance,
        surface: race.surface,
        top_picks_from_bookmaker_odds: race.top_picks_from_bookmaker_odds
      }))

      races.value.sort((a, b) => a.race_number.localeCompare(b.race_number))
    } catch (err) {
      console.error('Error fetching races:', err)
      error.value = 'Failed to fetch races. Please try again.'
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchRaces()
  })
</script>