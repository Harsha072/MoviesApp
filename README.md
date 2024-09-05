# Movies App
__Name:__ [Puttaswamy Harsha]

## Overview.

[A bullet-point list of the features developed for the React SPA app (new/modified ones only for the Movies app),]

+ Feature 1- Upcoming Movies Page
+ Feature 2- Popular Actors List Page.
+ Feature 3- Movies Detail page
+ Feature 4- Similar Movies Feature for selected movies
+ Feature 5- Additional Filter for Movie Page
+ Feature 6- Actors Detail Page
+ Feature 7- Popular series Page
+ Feature 8- Popular movies Page
+ Feature 9- Favourite movie/series page
+ Feature 10- Display Message on empty list page.
+ Feature 11- Supabase email Sign in.
+ Feature 12- Pagination for listing page


## Feature Design.

[ For each feature listed in the overview, show a screenshot(s) of its UI layout (use appropriate magnification for accessibility). Include captions with the images.]

e.g. 

#### The Upcoming Movies feature.

> Lists movies from the Upcoming movies endpoint of TMDB

![][upcoming_movies]

#### Movies Reviews feature.

> Lists  the reviews for a particular movie (text extract only).

![][reviews]

> Click the 'Full Review' link of an entry in the above list to show the full text of a review. 

![][fullreview]

#### Popular Actors List Page.

> Lists popular actors from the Popular actors endpoint of TMDB 

![][popularactors]


> Displays the details of selected actor

![][actordetail]



> Displays the details of selected actor

![][actorsknownfor]


#### Popular movies List Page.

> Lists popular movies from the Popular movies endpoint of TMDB 

![][popularmovies]


> Displays the details of selected movie 

![][moviesdetail]


> Displays the list of similar movies which are similar to the selected movie

![][similarmovies]


#### Popular series List Page.

> Lists popular series from the Popular series endpoint of TMDB 

![][popularseries]


> Displays the details of selected series

![][seriesdetailpage]


> Displays the list of similar series which are similar to the selected series

![][similarseries]



#### Additional filter for movies.

>Filter the movies based on rating

![][filter]


#### No favourite selected.

>Displays the message if there are no favourite movies selected

![][emptylist]



#### favourite  page.

>Displays the list og  favourite movies selected

![][favouritemovies]


>Displays the list of  favourite series selected

![][favouriteseries]


#### using server state cache.

>Displays the message if there are no favourite movies selected

![][cache]

#### Login screen.

>Displays the message if there are no favourite movies selected

![][loginscreen]


#### Pagination.

>Displays the message if there are no favourite movies selected

![][pagination]






## Authentication.

[ List all the routes in your app and highlight those that are protected/private (require authentication).]

e.g.
All protected routes 
+ /movies/favourite - User favourite movie,
+ /series/favourite - User favourite series
+ /movies/upcoming - Upcoming movies
+ /movies/popular - All popular movies
+ /actors/popular - All popular actors
+ /movies/{movie_id} - Detailed information on a specific movie.
+ /reviews/{review_id} (Protected) - The full text of a movie review.
+ /movie/{movie_id}/similar - A list of similar movies. 
+ /tv/popular - All tv series
+ /series/:id - Series details
+ /actor/:id - Actor details
+ /reviews/:id - particular review about a movie
                



#### Supabase (if relevant)



## supdabase Dashboard
![][supabaseacc]

## supdabase Analytics
![][supabaseAuth]



## Deployment 

url: https://lab-movies-app-jrxc.vercel.app
Any valid email can login 




[upcoming_movies]: ./images/upcoming_movies.jpg
[reviews]: ./images/display_review.jpg
[fullreview]: ./images/full_review.jpg
[popularactors]: ./images/popular_Actors.jpg
[popularmovies]: ./images/popular_movies.jpg
[popularseries]: ./images/popular_series.jpg
[moviesdetail]: ./images/movies_detail_Page.jpg
[similarmovies]: ./images/similar_movies.jpg
[similarseries]: ./images/similar_series.jpg
[filter]: ./images/additional_filter.jpg
[emptylist]: ./images/empty_list.jpg
[seriesdetailpage]: ./images/series_details.jpg
[favouritemovies]: ./images/favourite_movies.jpg
[favouriteseries]: ./images/favourite_series.jpg
[actordetail]: ./images/actors_detail_page.jpg
[supabaseLogin]: ./images/login_Screen.jpg
[supabaseAuth]: ./images/Supabase_Auth.jpg
[supabaseacc]: ./images/supabase_Account.jpg
[pagination]: ./images/pagination.jpg
[loginscreen]: ./images/login_Screen.jpg
[actorsknownfor]: ./images/actorsknownfor.jpg
[cache]: ./images/serverstatecache.jpg


