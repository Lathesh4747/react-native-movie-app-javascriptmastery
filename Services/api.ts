//  const check = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWEzZTcwZWFjZWY1ODZmMjhkMDAwOTk0ZGQ2MzM0OCIsIm5iZiI6MTc1MjQwNDIyNy43MjcsInN1YiI6IjY4NzM5MTAzZTU2YzQ3YTg0YzZlYTYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bYyA-P3ERgwcuYe4nHXd8nnEOolHxjP-g-MPddnD5zw';
/// this code okay for using.. now we learn optimize this code for app Ultrimatly.. go to useFetch.ts file 
export const TMDB_CONFIG = {
     method:'GET',
    BASE_URL : 'https://api.themoviedb.org/3',
    API_KEY : process.env.TMDB_MOVIE_API_KEY,
    headers: {
        accept:'application/json',
        Authorization: `Bearer ${process.env.TMDB_MOVIE_API_KEY}`
        // Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWEzZTcwZWFjZWY1ODZmMjhkMDAwOTk0ZGQ2MzM0OCIsIm5iZiI6MTc1MjQwNDIyNy43MjcsInN1YiI6IjY4NzM5MTAzZTU2YzQ3YTg0YzZlYTYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bYyA-P3ERgwcuYe4nHXd8nnEOolHxjP-g-MPddnD5zw'
    }
}


export const fetchMovie = async( {query}:{query:string} )=>{
    const U_qurey = query?.split('%20')
    // console.log(U_qurey)
    // const UU_qurey = 
    const endpoint = query ? `/search/movie?query=${query}`   : '/discover/movie?sort_by=popularity.desc'
    const final_URL = `${TMDB_CONFIG.BASE_URL + endpoint }`
    console.log(final_URL)
    const respones = await fetch (final_URL,{
       method : TMDB_CONFIG.method,
       headers:TMDB_CONFIG.headers
    })
    console.log(respones)
    if (  !respones.ok  ){
        const errorText = await respones.text();
  console.error('TMDB Fetch Error:', respones.status, errorText);
  throw new Error(`Failed to fetch: ${respones.status}`);
    }
    console.log(respones)
    const data = await respones.json();

    return data.results;

}
// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWEzZTcwZWFjZWY1ODZmMjhkMDAwOTk0ZGQ2MzM0OCIsIm5iZiI6MTc1MjQwNDIyNy43MjcsInN1YiI6IjY4NzM5MTAzZTU2YzQ3YTg0YzZlYTYxNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bYyA-P3ERgwcuYe4nHXd8nnEOolHxjP-g-MPddnD5zw'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));