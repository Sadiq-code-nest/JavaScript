//Try Catch Finally use


try {
    //Test code
    alert(' Try Function');
    alert(x);
} catch (error) {
    //Handle error
    alert('Inside Catch block');

    console.log('Catch')
    console.log(error);
    console.log(error.name);
    console.log(error.message);

} finally {
    alert(' switch back to Finally Function');
}