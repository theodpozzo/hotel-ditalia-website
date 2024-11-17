# Running Everything

We will move this stuff to docker eventually but for now it lives here

To get postgres up and running we have to run these commands:
First we login to the postgres user
> sudo -iu postgres

Then we init the db data
> initdb -D /var/lib/postgres/data

> exit

Run the script: run_postgres.sh

Back into the postgres user
> sudo -iu postgres

Create the DB
> createdb hotel

Start psql
> psql hotel

> CREATE USER go WITH SUPERUSER PASSWORD 'go';
