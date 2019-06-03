#!/usr/bin/env bash

# bulk load data
mongoimport --db=readers-wishlist-development --collection=books --type=csv --headerline --file=data/books.csv
