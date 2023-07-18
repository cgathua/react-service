
import * as Accordion from '@radix-ui/react-accordion'
import {ChevronDownIcon } from '@radix-ui/react-icons';
import { Fragment } from 'react';

const AccordionDemo = () => { 

    return (
        <Fragment>
            <div className="container">
                <Accordion.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
                    <Accordion.Item className="AccordionItem" value="item-1">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>{elements.map(elem => <h3 key={elem.id}>{elem.question1}</h3>)}</span>
                            <ChevronDownIcon  className="AccordionChevron" />
                        </Accordion.Trigger>     
                        <Accordion.Content className="AccordionContent">
                            {elements.map(elem => <p key={elem.id}>{elem.answer1}</p>)}
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-2">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>{elements.map(elem => <h3 key={elem.id}>{elem.question2}</h3>)}</span>
                            <ChevronDownIcon  className="AccordionChevron" />
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            {elements.map(elem => <p key={elem.id}>{elem.answer2}</p>)}
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-3">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>{elements.map(elem => <h3 key={elem.id}>{elem.question3}</h3>)}</span>
                            <ChevronDownIcon  className="AccordionChevron" aria-hidden/>
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            {elements.map(elem => <p key={elem.id}>{elem.answer3}</p>)}
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-4">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>{elements.map(elem => <h3 key={elem.id}>{elem.question4}</h3>)}</span>
                            <ChevronDownIcon  className="AccordionChevron" aria-hidden/>
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            {elements.map(elem => <p key={elem.id}>{elem.answer4}</p>)}
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-5">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>{elements.map(elem => <h3 key={elem.id}>{elem.question5}</h3>)}</span>
                            <ChevronDownIcon  className="AccordionChevron" aria-hidden/>
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            {elements.map(elem => <p key={elem.id}>{elem.answer5}</p>)}
                        </Accordion.Content>
                    </Accordion.Item>

                    <Accordion.Item className="AccordionItem" value="item-6">
                        <Accordion.Trigger className="AccordionTrigger">
                            <span>{elements.map(elem => <h3 key={elem.id}>{elem.question6}</h3>)}</span>
                            <ChevronDownIcon  className="AccordionChevron" aria-hidden/>
                        </Accordion.Trigger>
                        <Accordion.Content className="AccordionContent">
                            {elements.map(elem => <p key={elem.id}>{elem.answer6}</p>)}
                        </Accordion.Content>
                    </Accordion.Item>

                </Accordion.Root>
            </div>
        </Fragment>
    );
}

let elements = [
    {
        id: 0,
        question1: "What is the labor rate?",
        answer1: "We charge $150 per hour for each service, for example Brakes would be 2hrs labor x $150 totalling $300. The fee is the same, regardless if it takes two or more hours to complete the job."
    },
    {
        id: 1,
        question2:"Is there any kind of warranty?",
        answer2: "New parts installed come with a one year warranty and the labor work is guaranteed for two years."
    },
    { 
        id: 2,
        question3:"Are the parts re-conditioned or new?",
        answer3: "Yes, all parts used in repairs are new bmw oem."
    },
    {
        id: 3,
        question4: "Can I bring my own parts?",
        answer4: "Yes, but the labor work will not receive any warranty."
    },
    { 
        id: 4,
        question5: "What types of payment do you accept?",
        answer5: "Cash, payPal, amex, visa & checks."
    },
    {
        id: 5,
        question6: "Do you provide a loaner car?",
        answer6: "We provide a shuttle service for pickup and drop-off instead."
    }
]


export default AccordionDemo;