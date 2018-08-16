import { AngularFireAuth } from 'angularfire2/auth';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  private user: firebase.User;

  constructor(public http: HttpClient, public af: AngularFireAuth) {
    af.authState.subscribe(user => { this.user = user; });
    console.log('Hello AuthProvider Provider');
  }

  signup(credentials: any): Promise<firebase.auth.UserCredential> {
    return this.af.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
  }

  login(credentials: any): Promise<firebase.auth.UserCredential> {
    return this.af.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
  }

  logout(): Promise<void> {
    return this.af.auth.signOut();
  }

  get autheticated(): boolean {
    return this.user !== null;
  }

}
