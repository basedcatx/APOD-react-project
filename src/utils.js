const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY


async function fnv1a(str) {
  let hash = 2166136261; // 32-bit FNV-1a prime
  const len = str.length;

  for (let i = 0; i < len; i++) {
    hash ^= str.charCodeAt(i);
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }

  return hash >>> 0; // Ensures the result is an unsigned 32-bit integer
}

export const getNasaUrl = () => {
    return `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
}

export const getHashedKey = async () => {
    return await fnv1a(new Date().toDateString())
}