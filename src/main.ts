// main.ts
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environment';
import firebase from 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp(environment.firebaseConfig);

// Teste de conexão
const firestore = firebase.firestore();
firestore.collection('test').doc('testDoc').set({ message: 'Teste de conexão' })
  .then(() => {
    console.log('Conexão com o Firestore estabelecida com sucesso!');
  })
  .catch(error => {
    console.error('Erro ao conectar-se ao Firestore:', error);
  });


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
