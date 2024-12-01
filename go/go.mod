module ditalia

go 1.23.2

replace db => ./db

replace hotel-ditalia-website/models => ./models

require (
	hotel-ditalia-website/api v0.0.0-00010101000000-000000000000
	hotel-ditalia-website/db v0.0.0-00010101000000-000000000000
)

require (
	github.com/gorilla/mux v1.8.1 // indirect
	github.com/jackc/pgpassfile v1.0.0 // indirect
	github.com/jackc/pgservicefile v0.0.0-20240606120523-5a60cdf6a761 // indirect
	github.com/jackc/pgx/v5 v5.7.1 // indirect
	github.com/jackc/puddle/v2 v2.2.2 // indirect
	golang.org/x/crypto v0.27.0 // indirect
	golang.org/x/sync v0.8.0 // indirect
	golang.org/x/text v0.18.0 // indirect
	hotel-ditalia-website/models v0.0.0-00010101000000-000000000000 // indirect
)

replace hotel-ditalia-website/db => ./db

replace hotel-ditalia-website/api => ./api
