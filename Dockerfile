# Image de base Node 22
FROM node:22-alpine  

# Définir le répertoire de travail
WORKDIR /awslabs 

# Copier uniquement les fichiers de configuration (package.json + package-lock.json)
COPY package*.json ./  

# Installer les dépendances
RUN npm install  

# Copier tout le projet
COPY . .  

# Compiler TypeScript (si tu as un build)
RUN npm run build  

# Exposer le port de l’API
EXPOSE 6000  

# Commande de démarrage
CMD ["npm", "run", "start"]
