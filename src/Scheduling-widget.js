import React from 'react';

const SchedulingWidget = () => {
  return (
    <div style={{ width: '100%', height: '700px' }}>
      <iframe
        src="https://go.servicetitan.com/webscheduler?tenantid=464995204&campaignid=1009495"
        style={{ width: '100%', height: '100%', border: 'none' }}
        title="Service Scheduling Widget"
      />
    </div>
  );
};

export default SchedulingWidget;