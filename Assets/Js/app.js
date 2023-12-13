let handleAnswer = () => {
    guess_limit = 100;
    let answer = parseInt(document.querySelector('#answer').value);

    let guess_val = parseInt(Math.random() * guess_limit);

    if(answer > guess_limit){
        swal.fire({
            title: 'Error Occured',
            text: `Invalid limit, guesses are from 1 - ${ guess_limit }`,
            icon: 'error'
        })
    } else {

    if(answer){

    if (guess_val == answer) {
        swal.fire({
            title: 'Correct Answer',
            text: `Congratulations, you won i was actually thinking of ${ guess_val}`,
            icon: 'success'
        });
    }

    else {
        swal.fire({
            title: 'Wrong Answer',
            text: `Please, try again you failed i was actually thinking of ${ guess_val}`,
            icon: 'error'
        });


    }
}
 else {

    swal.fire({
        title: 'Please enter number',
        text: 'Kindly enter an integer inside the number field!',
        icon: 'info'
    })
 }

}


}
