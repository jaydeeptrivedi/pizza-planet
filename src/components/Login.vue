<template>
    <div class="row">
        <form>
            <div class="form-group">
                <label class="col-sm-3">Email</label>
                <input type="email" class="form-control" id="email">   
            </div> 
            <div class="form-group">
                <label class="col-sm-3">Password</label>
                <input type="password" class="form-control" id="password">   
            </div> 
            <button type="button" @click.prevent="signIn" class="btn btn-primary">Sign In</button>
            <button type="button" @click.prevent="signOut" class="btn btn-danger">Sign Out</button>
        </form>
    </div>
</template>

<script>
import Firebase from 'firebase';

export default {
    methods:{
        signIn : function(){
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            Firebase.auth().signInWithEmailAndPassword(email,password).then(function(){
                alert('logged in');
            }).catch(function(error){
                var errorCode = error.code;
                var errorMessage = error.message;

                if(errorCode === 'auth/wrong-password'){
                    alert('Wrong password');
                }
                else{
                    alert(errorMessage);
                }
            })
        },
        signOut : function(){
            Firebase.auth().signOut().then(function(){
                alert('logged out');
            }).catch(function(error){
                alert(error.message);
            });
        }
    } 
}
</script>
