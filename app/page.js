import Katamari_1 from '@/components/Katamari_1'
import Katamari_2 from '@/components/Katamari_2'
import Katamari_3 from '@/components/Katamari_3'

const Home = () => {
    return (
        <div className='bg-slate-800 h-screen text-3xl text-white overflow-hidden space-y-8'>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, laudantium! Quasi asperiores iste vero sint eius,
                facere repudiandae! Distinctio libero unde eos voluptatum dolor
                rerum facilis. Eveniet, placeat, velit ut nihil molestias soluta
                odio corporis saepe excepturi, neque maxime quaerat magnam
                tenetur ipsum minus odit. Nulla vel amet numquam doloremque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, laudantium! Quasi asperiores iste vero sint eius,
                facere repudiandae! Distinctio libero unde eos voluptatum dolor
                rerum facilis. Eveniet, placeat, velit ut nihil molestias soluta
                odio corporis saepe excepturi, neque maxime quaerat magnam
                tenetur ipsum minus odit. Nulla vel amet numquam doloremque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, laudantium! Quasi asperiores iste vero sint eius,
                facere repudiandae! Distinctio libero unde eos voluptatum dolor
                rerum facilis. Eveniet, placeat, velit ut nihil molestias soluta
                odio corporis saepe excepturi, neque maxime quaerat magnam
                tenetur ipsum minus odit. Nulla vel amet numquam doloremque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, laudantium! Quasi asperiores iste vero sint eius,
                facere repudiandae! Distinctio libero unde eos voluptatum dolor
                rerum facilis. Eveniet, placeat, velit ut nihil molestias soluta
                odio corporis saepe excepturi, neque maxime quaerat magnam
                tenetur ipsum minus odit. Nulla vel amet numquam doloremque.
            </p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, laudantium! Quasi asperiores iste vero sint eius,
                facere repudiandae! Distinctio libero unde eos voluptatum dolor
                rerum facilis. Eveniet, placeat, velit ut nihil molestias soluta
                odio corporis saepe excepturi, neque maxime quaerat magnam
                tenetur ipsum minus odit. Nulla vel amet numquam doloremque.
            </p>

			{/* remove words on mouse move */}
            {/* <Katamari_1 /> */}

			{/* remove words on wasd controlled sphere position */}
            <Katamari_2 />

			{/* rotation (not working correctly) */}
            {/* <Katamari_3 /> */}
        </div>
    )
}
export default Home
