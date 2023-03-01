const main = (userId) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {}) .then((res) => console.log(res));
}

main(1);
main(2);
main(3);
main(4);
main(5);