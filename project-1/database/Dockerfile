FROM postgres
COPY postgres.sql /docker-entrypoint-initdb.d/
EXPOSE 5432
CMD ["postgres"]