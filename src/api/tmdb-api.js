

export const getMovies = (args) => {
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }}
  ).then((res) => res.json());
};


export const getUpcomingMovies = () => {
  console.log("movies new ::::::;;;;;;;;;;");
  
  return fetch(`/api/movies/upcoming`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log("Response:", data);
      return data;
    })
    .catch((error) => {
      console.error("Error:", error);
      throw error;
    });
};








export const signup = (email, password, firstName, lastName) => {
  return fetch('/api/accounts', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password, firstName: firstName, lastName: lastName })
  }).then(res => res.json())
};

export const login = (email, password) => {
  return fetch('/api/accounts/security/token', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ email: email, password: password })
  }).then(res => res.json())
};


export const getActors = (args) => {
  console.log("get movies",args)
  const [, page] = args.queryKey;
 
  console.log("page ",page)
  return fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${import.meta.env.VITE_TMDB_KEY}&language=en-US&page=${page}`
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getSimilarMovies = (args) => {
  console.log("calling similar new",args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  console.log("the id ",id)
  return fetch(
    `/api/movies/similar/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }}
  ).then((response) => {
    if (!response.ok) {
      console.log("eroooo")
      throw new Error(response.json().message);
    }
    console.log("similar response ",response)
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
export const getSimilarSeries = (args) => {
  console.log("calling similar series new",args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/series/similar/${id}`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }}
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    console.log("the response similar series  ",response)
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};

export const getPopularMovies = (args) => {
  console.log("get movies new ",args)
  const [, page] = args.queryKey;
  return fetch(
    `/api/movies/popular`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }}
    ).then((response) => {
    if (!response.ok) {
      
      throw new Error(response.json().message);
    }
    console.log("the response ",response)
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};
export const getPopularTvSeries = (args) => {
  console.log("get all series",args)
  const [, page] = args.queryKey;
  return fetch(
    `/api/series/`,{headers: {
      'Authorization': window.localStorage.getItem('token')
   }}
           ).then((response) => {
    if (!response.ok) {
      
      throw new Error(response.json().message);
    }
    console.log("the response ",response)
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};


  export const getMovie = (args) => {
    console.log("get nmovie",args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  export const getMovieCredits = async (args) => {
    console.log("get movie credits new", args);
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    
    try {
      const response = await fetch(`/api/movies/credits/${id}`, {
        headers: {
          'Authorization': window.localStorage.getItem('token')
        }
      });
      
      if (!response.ok) {
        throw new Error(await response.json().message);
      }
      
      return response.json();
    } catch (error) {
      throw error;
    }
  };
  
  export const getSeries = (args) => {
    console.log("get nmovie",args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  export const getActor = (args) => {
    console.log("get actor",args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  export const getActorCredits = (args) => {
    console.log("get actor",args)
    const [, idPart] = args.queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };


  export const getGenres = async () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        import.meta.env.VITE_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  
  export const getMovieImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getSeriesImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://api.themoviedb.org/3/tv/${id}/images?api_key=${import.meta.env.VITE_TMDB_KEY}`
    ).then( (response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getMovieReviews = (id) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${import.meta.env.VITE_TMDB_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };
  