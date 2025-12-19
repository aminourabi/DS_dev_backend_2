ds2_dev_backend :

MOHAMED AMIN OURABI & Ayoub werghemmi

#  Repair Management API

Backend professionnel pour la gestion des réparations d’appareils électroniques.

##  Technologies
- NestJS
- MySQL
- TypeORM
- JWT Authentication
- Role-Based Authorization

##  Roles
- ADMIN: gestion stock, utilisateurs
- TECH: interventions et devices

##  Modules
- Auth
- Users
- Parts (Stock)
- Devices
- Interventions

##  Auth
POST /auth/login  
POST /auth/register

##  Run
npm install  
npm run start:dev
