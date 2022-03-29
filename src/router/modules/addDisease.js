export default [
    {
        path: '/add_disease',
        component: () => import ('@/views/addDisease/index.vue'),
    },
    {
        path: '/add_disease_details/:id',
        component: () => import ('@/views/addDisease/viewDiseaseDetails.vue'),
    },

]