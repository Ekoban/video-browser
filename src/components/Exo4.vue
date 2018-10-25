const vm = new Vue({
    el: '#root',
    data() {
        return {
            buttonHidden: false,
            listHidden: true,
        };
    },
    methods: {
        hideButton() {
            console.log("hide the button")
        },
        hideList() {
            console.log("hide the list")
        },
    },
    computed: {
        buttonStatus() {},
        listStatus() {},
    },

    template: `
      <div>
        <a class='dropdown-button btn' :style="" href='#'>Open</a>
        
        <div>
            <ul class='dropdown-content' @click="hideList">
              <li><a href="#!">one</a></li>
              <li><a href="#!">two</a></li>
              <li class="divider"></li>
              <li><a href="#!">three</a></li>
            </ul>
        </div>
      </div>
    `
});
