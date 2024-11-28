import React, { useState } from 'react';
import { Box, TabNav, Flex, Button, Badge } from "@radix-ui/themes";
import "../style.css";
import { IoCheckmark, IoChevronDownOutline } from 'react-icons/io5';

import * as Accordion from '@radix-ui/react-accordion';


const EmployerProduct = () => {
  const [activeTab, setActiveTab] = useState('standard'); // Default to 'standard' tab

  return (
    <Box id="product-view">
      <Box className="word-container">
        <h1>Pay upfront and get a great discount on ads</h1>
        Choose an Ad Budget plan and start posting your job
      </Box>

      <TabNav.Root size="2"className="tabNav">
        <TabNav.Link 
          href="#" 
          active={activeTab === 'standard'} 
          onClick={() => setActiveTab('standard')}
        >
          Standard Ad Budget
        </TabNav.Link>
        
        <TabNav.Link 
          href="#" 
          active={activeTab === 'premium'} 
          onClick={() => setActiveTab('premium')}
        >
          Premium Ad Budget
        </TabNav.Link>
      </TabNav.Root>
      
      <Box className="tab-content">
        {activeTab === 'standard' && (
          <Box className="standard-content">
            {/* Standard Ad Budget content goes here */}
            <h2>Standard Ad Budget</h2>
            <Flex>

            <Box className="box-container">
            <h2>Occasional</h2>
            <p>Post 3–6 ads over 12 months</p>
            <hr></hr>

        <h2>RM 69.69</h2>
        <Button>Buy Now</Button>

        <p><Badge color="orange">6% off now</Badge></p>

 
        <Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Post premium and branded ad
</p>
</Flex>


<Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Discount applies for 12 months
</p>
</Flex>
        
            </Box>
            
            <Box className="box-container">
            <h2>Normal</h2>
            <p>Post 7–12 ads over 12 months</p>
            <hr></hr>

        <h2>RM 420.69</h2>
        <Button>Buy Now</Button>

        <p><Badge color="orange">10% off now</Badge></p>

 
            
        <Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
  Post Branded and Premium ads
</p>
</Flex>


<Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Discount applies for 12 months
</p>
</Flex>
            </Box>

            <Box className="box-container">
            <h2>Exclussive</h2>
            <p>Post 13-23 ads over 24 months</p>
            <hr></hr>

        <h2>RM 7000.51</h2>
        <Button>Buy Now</Button>
        <p><Badge color="orange">6% off now</Badge></p>

 
            
        <Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
  Post Branded and Premium ads
</p>
</Flex>


<Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Discount applies for 12 months
</p>
</Flex>
            </Box>
            
            </Flex>
          </Box>
        )}
        {activeTab === 'premium' && (
          <Box className="premium-content">
            {/* Premium Ad Budget content goes here */}
            <h2>Premium Ad Budget</h2>
            <Flex>
            <Box className="box-container">
            <h2>Occasional</h2>
            <p>Post 4–8 ads over 12 months</p>
            <hr></hr>

        <h2>RM 100.99</h2>
        <Button>Buy Now</Button>

        <p><Badge color="orange">6% off now</Badge></p>

 
            
        <Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Highlighted job search results
</p>
</Flex>


<Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Discount applies for 12 months
</p>
</Flex>
            </Box>

            <Box className="box-container">
            <h2>Normal</h2>
            <p>Post 8–14 ads over 12 months</p>
            <hr></hr>

        <h2>RM 699.99</h2>
        <Button>Buy Now</Button>

        <p><Badge color="orange">10% off now</Badge></p>

 
            
        <Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Highlighted job search results
</p>
</Flex>


<Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Discount applies for 12 months
</p>
</Flex>
            </Box>

            <Box className="box-container">
            <h2>Exclussive</h2>
            <p>Post 15-30 ads over 24 months</p>
            <hr></hr>

        <h2>RM 9999.99</h2>
        <Button>Buy Now</Button>

        <p><Badge color="orange">20% off now</Badge></p>

 
            
        <Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Highlighted job search results
</p>
</Flex>


<Flex className="check-word">       
  <IoCheckmark style={{ marginTop: '20px' , marginRight:'10px' }} size={30} />
   <p>
   Discount applies for 12 months
</p>
</Flex>
            </Box>
            </Flex>
          </Box>
        )}

                  <p className="offer-word">
                   Get in touch with us to buy a <strong>better discounts</strong>
                    </p>

                    <h1>FAQS</h1>

                    <Accordion.Root
          className="AccordionRoot"
          type="single"
          defaultValue="item-1"
          collapsible
        >
          <Accordion.Item className="AccordionItem" value="item-1">
            <Accordion.Header>
              <Accordion.Trigger className="Accordion-question">
                <Flex>
                How does the Ad Budget work?<IoChevronDownOutline size={30} style={{marginLeft:'20px', marginTop:'6px' }} />
                </Flex>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
            Our Ad Budget allows you to prepay for a discounted rate on job ads. This budget can be used for both Standard and Premium job postings.
            </Accordion.Content>
          </Accordion.Item>
        <hr className="line"></hr>
          <Accordion.Item className="AccordionItem" value="item-2">
            <Accordion.Header>
              <Accordion.Trigger className="Accordion-question">
              <Flex>
               Standard and Premium Ad Budget difference?<IoChevronDownOutline size={30} style={{marginLeft:'20px', marginTop:'6px' }} />
                </Flex>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
            Standard Ad Budget gives you access to basic features, while Premium includes additional features such as highlighted job listings.
            </Accordion.Content>
          </Accordion.Item>
          <hr className="line"></hr>
          <Accordion.Item className="AccordionItem" value="item-3">
            <Accordion.Header>
              <Accordion.Trigger className="Accordion-question">
              <Flex>
              Can I change my Ad Budget plan later?<IoChevronDownOutline size={30} style={{marginLeft:'20px', marginTop:'6px' }} />
                </Flex>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
            Yes, you can upgrade or downgrade your Ad Budget plan at any time through your account settings.
            </Accordion.Content>
          </Accordion.Item>
          <hr className="line"></hr>
          <Accordion.Item className="AccordionItem" value="item-4">
            <Accordion.Header>
              <Accordion.Trigger className="Accordion-question">
              <Flex>
              Do unused Ad Budget funds expire?<IoChevronDownOutline size={30} style={{marginLeft:'20px', marginTop:'6px' }} />
                </Flex>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
            No, any unused funds in your Ad Budget will roll over each month and remain available until used.
            </Accordion.Content>
          </Accordion.Item>
          <hr className="line"></hr>
          <Accordion.Item className="AccordionItem" value="item-5">
            <Accordion.Header>
              <Accordion.Trigger className="Accordion-question">
              <Flex>
              Are there any discounts for long-term ad plans?<IoChevronDownOutline size={30} style={{marginLeft:'20px', marginTop:'6px' }} />
                </Flex>
                </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content>
            Yes, we offer discounts for purchasing Ad Budget plans for 6 months or more upfront.
            </Accordion.Content>
          </Accordion.Item>
          <hr className="line"></hr>
        </Accordion.Root>
  
  
      </Box>
    </Box>
  );
};


export default EmployerProduct;
