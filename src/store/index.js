import {createStore} from "vuex";

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: 'm1',
                    image: 'https://cropwatch.unl.edu/soybeanMG/images/disease/DiseaseFigure64.jpg',
                    title: 'Bacteria',
                    description: 'Bacteria are single-celled microscopic organisms with cell walls that reproduce by binary fission (one cell splits into two). Introduction to the plant must occur through natural openings or wounds in the plant. Bacteria overwinter primarily in soil and in or on plant material that does not decompose, but some survive inside insect vectors'
                },
                {
                    id: 'm2',
                    image: 'https://cropwatch.unl.edu/soybeanMG/images/disease/DiseaseFigure67.jpg',
                    title: 'Nematodes',
                    description: 'Nematodes are microscopic worm-like animals. The majority of nematodes are soil dwelling animals and move with soil. However, there are some nematodes that are transmitted through insects and infect above ground plant parts'
                },
                {
                    id: 'm3',
                    image: 'https://cropwatch.unl.edu/soybeanMG/images/disease/DiseaseFigure63.jpg',
                    title: 'Fungi and Fungal-like Organisms (FLOs)',
                    description: 'Collectively, fungi and FLOs cause the most plant disease than any other group of plant pathogens. These organisms cannot make their own food, lack chlorophyll, have filamentous growth, and may or may not reproduce by spores. Fungi and FLOs are able to overwinter in soil or on plant debris. However, some fungi and FLOs cannot overwinter in northern climates because of low winter temperatures. These pathogens overwinter in southern climates and then are transported by air currents back to northern climates. Disease movement from southern to northern climates can be monitored during the growing season'
                },

            ]
        };
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: memoryData.id,
                title: memoryData.title,
                image: memoryData.image,
                description: memoryData.description
            };
            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);

            };
        }
    }

});
export default store;