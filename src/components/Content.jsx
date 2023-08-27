import React,{useState} from 'react'
import ReactModal from 'react-modal';

export default function Content() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
       <tr>
          <td>shruti</td>
          <td>shruti02@gmail.com</td>
          <td>8377095549</td>
          <td>Active</td>
          <td><button onClick={() => setIsOpen(true)}>view transaction</button></td>
        </tr>
      <div>
        <ReactModal
        style={{width:'701px', marginLeft: '734px'}}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
         <table>
    <tr>
    <th>Accoount Holder</th>
    <th>Amount</th>
    </tr>
    <tr>
        <td>Ankit</td>
        <td>100/-</td>
    </tr>
    <tr>
        <td>Rupali</td>
        <td>-1000/-</td>
    </tr>

    <tr>
        <td>Annu</td>
        <td>200/-</td>
    </tr>

    <tr>
        <td>Vansh</td>
        <td>-100/-</td>
    </tr>


</table>
      </ReactModal>
      </div>
        {/* {isOpen && (
          <div>
            <button onClick={() => setIsOpen(false)}>close</button>
           <iframe title='pop' src=''>io</iframe>
          </div>
        )} */}
        <tr>
          <td>Aparna</td>
          <td>Aparna02@gmail.com</td>
          <td>8595785916</td>
          <td>Active</td>
          <td><button onClick={() => setIsOpen(true)}>view transaction</button></td>
        </tr>
        <div>
        <ReactModal
        style={{width:'701px', marginLeft: '734px'}}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
         <table>
    <tr>
    <th>Accoount Holder</th>
    <th>Amount</th>
    </tr>
    <tr>
        <td>Ankit</td>
        <td>100/-</td>
    </tr>
    <tr>
        <td>Rupali</td>
        <td>-1000/-</td>
    </tr>

    <tr>
        <td>Annu</td>
        <td>200/-</td>
    </tr>

    <tr>
        <td>Vansh</td>
        <td>-100/-</td>
    </tr>


</table>
      </ReactModal>
      </div>

        <tr>
          <td>utsav</td>
          <td>utsav02@gmail.com</td>
          <td>8377095549</td>
          <td>disable</td>
          <td><button onClick={() => setIsOpen(true)}>view transaction</button></td>
        </tr>

        <div>
        <ReactModal
        style={{width:'701px', marginLeft: '734px'}}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
         <table>
    <tr>
    <th>Accoount Holder</th>
    <th>Amount</th>
    </tr>
    <tr>
        <td>Ankit</td>
        <td>100/-</td>
    </tr>
    <tr>
        <td>Rupali</td>
        <td>-1000/-</td>
    </tr>

    <tr>
        <td>Annu</td>
        <td>200/-</td>
    </tr>

    <tr>
        <td>Vansh</td>
        <td>-100/-</td>
    </tr>


</table>

      </ReactModal>
      </div>
        <tr>
          <td>yash</td>
          <td>yash02@gmail.com</td>
          <td>8377095549</td>
          <td>Active</td>
          <td><button onClick={() => setIsOpen(true)}>view transaction</button></td>
        </tr>

        <div>
        <ReactModal
        style={{width:'701px', marginLeft: '734px'}}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
         <table>
    <tr>
    <th>Accoount Holder</th>
    <th>Amount</th>
    </tr>
    <tr>
        <td>Ankit</td>
        <td>100/-</td>
    </tr>
    <tr>
        <td>Rupali</td>
        <td>-1000/-</td>
    </tr>

    <tr>
        <td>Annu</td>
        <td>200/-</td>
    </tr>

    <tr>
        <td>Vansh</td>
        <td>-100/-</td>
    </tr>


</table>
      </ReactModal>
      </div>


        <tr>
          <td>Harsh</td>
          <td>harsh02@gmail.com</td>
          <td>8377095549</td>
          <td>Active</td>
          <td><button onClick={() => setIsOpen(true)}>view transaction</button></td>
        </tr>


        <div>
        <ReactModal
        style={{width:'701px', marginLeft: '734px'}}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
         <table>
    <tr>
    <th>Accoount Holder</th>
    <th>Amount</th>
    </tr>
    <tr>
        <td>Ankit</td>
        <td>100/-</td>
    </tr>
    <tr>
        <td>Rupali</td>
        <td>-1000/-</td>
    </tr>

    <tr>
        <td>Annu</td>
        <td>200/-</td>
    </tr>

    <tr>
        <td>Vansh</td>
        <td>-100/-</td>
    </tr>


</table>
      </ReactModal>
      </div>


        <tr>
          <td>Kanishka</td>
          <td>kanishka02@gmail.com</td>
          <td>8377095549</td>
          <td>Active</td>
          <td><button onClick={() => setIsOpen(true)}>view transaction</button></td>
        </tr>

        <div>
        <ReactModal
        style={{width:'701px', marginLeft: '734px'}}
        isOpen={isOpen}
        contentLabel="Example Modal"
        onRequestClose={() => setIsOpen(false)}
      >
         <table>
    <tr>
    <th>Accoount Holder</th>
    <th>Amount</th>
    </tr>
    <tr>
        <td>Ankit</td>
        <td>100/-</td>
    </tr>
    <tr>
        <td>Rupali</td>
        <td>-1000/-</td>
    </tr>

    <tr>
        <td>Annu</td>
        <td>200/-</td>
    </tr>

    <tr>
        <td>Vansh</td>
        <td>-100/-</td>
    </tr>


</table>
      </ReactModal>
      </div>

    </div>
  )
}
