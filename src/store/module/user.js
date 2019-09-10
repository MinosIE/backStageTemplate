export default {
    state: { userName: '测试登录用户', role: '1' },
    mutations: {
        SET_USERNAME(state, name) {
            state.userName = name;
        },
        SET_USERROLE(state, role) {
            state.role = role;
        },
    },
};
