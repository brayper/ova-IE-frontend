create table usuario (id serial not null PRIMARY KEY, nombre varchar (150) not null, correo varchar (100) not null, password varchar (100) not null, telefono varchar (100) not null, fecha_registro date not null);
create table curso (id serial not null PRIMARY KEY, titulo varchar (200) not null, descripcion text);
create table leccion (id serial not null PRIMARY KEY, id_curso int not null, titulo varchar (200) not null, descripcion text not null, progreso int not null, calificacion int not null);
create table usuario_leccion (id serial not null PRIMARY KEY, id_usuario int not null, id_leccion int not null, fecha_inscripcion date not null);

alter table leccion add constraint FK_leccion_curso foreign key (id_curso) references curso (id);
alter table usuario_leccion add constraint FK_usuario_leccion foreign key (id_usuario) references usuario(id);
alter table usuario_leccion add constraint FK_leccion_usuario foreign key (id_leccion) references leccion(id);