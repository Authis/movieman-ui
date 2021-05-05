export default function Grids({ date }) {

    var header = Object.keys(date[0]);
    
    return (
        <div class="container-table100">
        <div class="wrap-table100">
            <div class="table">
              <div class="row header">
                  {
                    header.map((head,i)=>{
                        return(
                        <div class="cell"> {head} </div>
                        );
                    })
                  }
               </div> 
        {
        date.map((option, i) => {
            var body = Object.values(option);
            return (
                <div class="row">
                 {
                    body.map((values,i)=>{
                        return(
                            <div class="cell" data-title={values}> {values} </div>
                        );
                    })
                  } 
                    
                 </div>
            );
          })
          }
         </div>
    </div>
  </div>
    );
  }
  