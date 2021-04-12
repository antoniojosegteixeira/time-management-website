import React from 'react';


const SliderItem = ({data}) => {

  return (
      <a className="item growing" style={{margin: '4rem 0 2.1rem 0', cursor: 'pointer'}}>
        <h2 class="ui icon header medium">
          <i class={data.className}></i>
          <div class="content">
            {data.name}
          </div>
        </h2>
      </a>

  )
}

export default SliderItem;