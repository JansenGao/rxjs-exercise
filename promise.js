import {Promise} from 'bluebird';

function syncData1(){
    return new Promise((resolve, reject) => {
        console.log(`${new Date().toString()}: Sync data 1 begins.`);
        setTimeout(() => {
            resolve(`${new Date().toString()}: Sync data 1 completes.`);
        }, 1000);
    })
}

function syncData2(){
    return new Promise((resolve, reject) => {
        console.log(`${new Date().toString()}: Sync data 2 begins.`);
        setTimeout(() => {
            resolve(`${new Date().toString()}: Sync data 2 completes.`);
        }, 2000);
    })
}

function syncData3(){
    return new Promise((resolve, reject) => {
        console.log(`${new Date().toString()}: Sync data 3 begins.`);
        setTimeout(() => {
            reject(`${new Date().toString()}: Sync data 3 fails.`);
        }, 1000);
    })
}

let array = [syncData1, syncData2, syncData3];

Promise.reduce(array, (total, current, index) => {
    return current().then(
        res => console.log(res)
    );
}, Promise.resolve()).then(
    res => console.log(`${new Date().toString()}: All completes.`)
).catch(
    error => console.log(`${new Date().toString()}: [Error] ${error}`)
);
