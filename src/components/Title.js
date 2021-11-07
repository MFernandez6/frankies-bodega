import React from 'react'
import styled from 'styled-components';

export default function Title({name, title}) {
    return (
        <TitleWrapper>
            <div className="row">
                <div className="col-10 mx-auto my-2 text-center text-title">
                    <div className="text-capitalize font-weight-bold">
                        {name} <strong>{title}</strong>
                    </div>
                </div>
            </div>
        </TitleWrapper>
    )
}

const TitleWrapper = styled.nav`
background: #f6f2e7;
.row{
    color: #a96ae6 !important;
    font-size: 1.3rem;
    text-transform: capitalize;
}
`