# --- Created by Ebean DDL
# To stop Ebean DDL generation, remove this comment and start using Evolutions

# --- !Ups

create table user (
  id                        integer auto_increment not null,
  name                      varchar(255),
  email                     varchar(255),
  username                  varchar(255),
  password                  varchar(255),
  is_active                 tinyint(1) default 0,
  unique_id                 varchar(255),
  constraint pk_user primary key (id))
;




# --- !Downs

SET FOREIGN_KEY_CHECKS=0;

drop table user;

SET FOREIGN_KEY_CHECKS=1;

