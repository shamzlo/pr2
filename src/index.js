import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

new Vue({
    el: '#app',
    data: {
        students: [],
        search: '',
        piece: '',
        addForm: {
            mark: '',
            group: '',
            isDonePr: false,
            name: '',
        },
        converter: {
            from: '',
            to: '',
            amount: '',
        },
        ccy: [],
    },
    mounted: function () {
        axios.get('http://46.101.212.195:3000/students').then((response) => this.students = response.data)
    },
    methods: {
        deleteStudent(studId) {
            this.students = this.students.filter(elem => {
                return elem._id != studId;
            });
        },
        addStudent() {
            const id = this.students.length + 1;
            this.students.push({ id, ...this.addForm });
        },
    },
}); 