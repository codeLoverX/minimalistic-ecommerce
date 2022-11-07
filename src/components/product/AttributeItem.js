import React, {cloneElement, Component} from "react";
import { sizeToDisplayMapper } from "../../utils/sizeToDisplayMapper";

class AttributeItem extends Component {

    render(){
        const { 
            sizeBoxCloned,
            colorBoxCloned,
            displayValue, 
            attributeName,
            ...otherProps
        } = this.props
        
        if (attributeName.toLowerCase() === 'size')  
            return (
                <>
                {
                cloneElement(
                    sizeBoxCloned,
                    {   
                        ...otherProps,
                        paddingX: "3px",
                        paddingY: "6px",
                        children: 
                        <> {
                            sizeToDisplayMapper[displayValue] ?  
                            sizeToDisplayMapper[displayValue] :
                            displayValue
                        } </>
                    }
                )
                }
                </>
            )
        if (attributeName.toLowerCase() === 'color')  
            return (
                <>
                {
                cloneElement(
                    colorBoxCloned,
                    {   
                        ...otherProps,
                        paddingX: "3px",
                        paddingY: "6px",
                        backgroundColor: `${displayValue}`
                    }
                )
                }
                </>
               
            )
        return (
            <>
                {
                cloneElement(
                    sizeBoxCloned,
                    {   
                        ...otherProps,
                        paddingX: "3px",
                        paddingY: "6px",
                        children: 
                        <> 
                            {displayValue}
                         </>
                    }
                )
                }
            </>
        )
    }
}

export default AttributeItem