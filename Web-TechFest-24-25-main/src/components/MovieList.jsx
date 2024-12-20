import React from 'react'

export default function MovieList() {
  const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
              
                const response = await fetch('https://imdb8.p.rapidapi.com/title/v2/get-popular?first=20&country=US&language=en-US', {
                    method: 'GET',
                    headers: {
                    
                        'x-rapidapi-key': '11356e5d0bmsh653865409d5be73p1e9de0jsna08674456008',
		                    'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                    }
                });
                
                if (!response.ok) {
                    throw new Error('Failed to fetch movies');
                }
                
                const data = await response.json();
                
            
                const transformedMovies = data.data.movies.edges.map((edge, index) => ({
                  id: edge.node.id || `movie-${index}`,
                  name: edge.node.titleText?.text || 'Unknown Title',
                  rating: edge.node.ratingsSummary?.aggregateRating || 0,
                  image: edge.node.primaryImage?.url || '/images/Dark.png',
                  genres: edge.node.titleGenres?.genres 
                      ? edge.node.titleGenres.genres.slice(0, 4).map(g => g.genre.text) 
                      : []
                }));

                setMovies(transformedMovies);
                
                setIsLoading(false);
            } catch (err) {
              
                setError(err.message);
      
                setIsLoading(false);
            }
        };

        
        fetchMovies();
    }, []); 

    if (isLoading) {
        return (
            <div className="p-6 text-white min-h-screen mt-10 text-center">
                <h1 className="text-3xl font-bold">Loading Movies...</h1>
            </div>
        );
    }

    // Render error state if there was a problem fetching movies
    if (error) {
        return (
            <div className="p-6 text-white min-h-screen mt-10 text-center">
                <h1 className="text-3xl font-bold text-red-500">Error: {error}</h1>
            </div>
        );
    }

      return (
        <div className="p-6 text-white min-h-screen mt-10">
          <h1 className="text-3xl font-bold text-center mb-6">Popular Movies</h1>
         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
            {movies.map((movie) => (
              <div
                key={movie.id}
                
                className="relative group rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:z-10"
              >
               
                <div className="relative bg-black text-white rounded-lg shadow-lg border-2 border-yellow-500 hover:border-yellow-400">
                  
                  <img
                    src={movie.image}
                    alt={movie.name}
                    className="w-full h-56 object-contain rounded-t-lg"
                  />
               
                  <div className="p-4">
                   
                    <h2 className="text-lg font-semibold">{movie.name}</h2>
                    
                  
                    <p className="text-gray-400">Rating: {movie.rating}/10</p>
                    
                   
                    <div className="mt-2 flex flex-wrap gap-2">
                      {movie.genres.map((genre, index) => (
                        <span 
                          key={index} 
                          className="px-2 py-1 text-xs bg-gray-800 border border-gray-600 rounded-full"
                        >
                          {genre}
                        </span>
                      ))}
                    </div>
                    
                  
                    <div className="mt-4 flex justify-between items-center">
                      <button 
                       
                        onClick={() => addToCart(movie)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }