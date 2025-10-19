export const useFirebaseStore = defineStore('firebase', () => {
  const user = ref(0)
  const count = ref(0)

  function increment() {
    count.value++
  }

  return { count, increment }
})