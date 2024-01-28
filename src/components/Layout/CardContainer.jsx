import {} from 'react'
import Card from './Card';



function CardContainer() {


    return (
        <div className='px-3 py-5 space-y-5'>
            <div className='w-full md:flex space-y-3 md:space-y-0 justify-between gap-5'>
            <Card image={"https://st4.depositphotos.com/1907633/21216/i/380/depositphotos_212162574-stock-photo-coding-software-developer-work-new.jpg"} title={"Hii I am shubham"} link={"https://unitemicrosystems.com/"} />
            <Card image={"https://st2.depositphotos.com/2465651/5181/i/450/depositphotos_51819965-stock-photo-backend-sourcecodes-on-computer-monitor.jpg"} title={"Hii I am shivan"} link={"https://unitemicrosystems.com/"} />
            <Card image={"https://st3.depositphotos.com/13194036/19088/i/600/depositphotos_190886304-stock-photo-depressed-couple-hackers-have-problem.jpgs"} title={"Hii I am kumar"} link={"https://unitemicrosystems.com/"} />

            </div>
           <div className='w-full md:flex space-y-3 md:space-y-0 justify-between gap-5'>
            <Card image={"https://st.depositphotos.com/1907633/3138/i/600/depositphotos_31384261-stock-photo-website-designer-working-with-the.jpg"} title={"Hii I am raju"} link={"https://unitemicrosystems.com/"} />
            <Card image={"https://st2.depositphotos.com/1032463/7811/i/600/depositphotos_78113092-stock-photo-programmer-profession-man-writing-programming.jpg"} title={"Hii I am shubham"} link={"https://unitemicrosystems.com/"} />
            <Card image={"https://st.depositphotos.com/1720162/1817/i/600/depositphotos_18177429-stock-photo-web-design-concept.jpg"} title={"Hii I am mukesh"} link={"https://unitemicrosystems.com/"} />
           </div>
        </div>
    )

}
export default CardContainer