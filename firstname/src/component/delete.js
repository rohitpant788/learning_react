(
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ marginLeft: '20px' }}>Todo Tasks</div>
        <div>
          <button style={{ marginLeft: '20px' }}>Button 1</button>
          <button style={{ marginLeft: '20px' }}>Button 2</button>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ marginRight: '20px' }}>
              <DataTable.DownloadCsv />
            </div>
            <div style={{ marginRight: '20px' }}>
              <DataTable.Print />
            </div>
            <div style={{ marginRight: '20px' }}>
              <DataTable.ViewColumns />
            </div>
            <div style={{ marginRight: '20px' }}>
              <button>Refresh</button>
            </div>
          </div>
        </div>
      </div>
    )
