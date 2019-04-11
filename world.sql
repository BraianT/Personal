create Table country(idCountry int AUTO_INCREMENT,
                     name varchar(100),
                      PRIMARY KEY (idCountry));
                     
create Table city(idCity int AUTO_INCREMENT, 
                  name varchar(100),
                  idCountry integer,
                   PRIMARY KEY (idCity));
                  
Insert into country (name) values ('Argentina');
Insert into country (name) values ('Alemania');
Insert into country (name) values ('Dinamarca');
Insert into country (name) values ('Suecia');
Insert into country (name) values ('Indonesia');



Insert into city (name,idCountry) values ('Cordoba',1);
Insert into city (name,idCountry) values ('Buenos Aires',1);
Insert into city (name,idCountry) values ('Santa Fe',1);




Select * from city where idCountry =1;