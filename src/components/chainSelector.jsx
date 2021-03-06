const ChainSelector = ({ setBlockchain, chain }) => {
  return (
    <div className='flex gap-12 items-center text-white my-4'>
      <div>
        <input
          onChange={(e) => setBlockchain(e.target.value)}
          className='mr-1'
          type='radio'
          name='blockchain'
          value='Ethereum'
          checked={chain === 'Ethereum'}
        />
        <label htmlFor='Eth'>Ethereum</label>
      </div>
      <div>
        <input
          onChange={(e) => setBlockchain(e.target.value)}
          className='mr-1'
          type='radio'
          name='blockchain'
          value='Rinkeby'
          checked={chain === 'Rinkeby'}
        />
        <label htmlFor='Rinkeby'>Rinkeby</label>
      </div>

      <div>
        <input
          onChange={(e) => setBlockchain(e.target.value)}
          className='mr-1'
          type='radio'
          name='blockchain'
          value='Polygon'
          checked={chain === 'Polygon'}
        />
        <label htmlFor='Polygon'>Polygon</label>
      </div>
      <div>
        <input
          onChange={(e) => setBlockchain(e.target.value)}
          className='mr-1'
          type='radio'
          name='mumbai'
          value='Mumbai'
          checked={chain === 'Mumbai'}
        />
        <label htmlFor='Bitcoin'>Bitcoin</label>
      </div>
      <div>
        <input
          onChange={(e) => setBlockchain(e.target.value)}
          className='mr-1'
          type='radio'
          name='blockchain'
          value='Bitcoin'
          checked={chain === 'Bitcoin'}
        />
        <label htmlFor='Bitcoin'>Bitcoin</label>
      </div>
    </div>
  )
}

export default ChainSelector
