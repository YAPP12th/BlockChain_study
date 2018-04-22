      var chart1 = c3.generate({
        bindto: '#chart1',
        data: {
          columns: [
            ['data1', 300, 350, 300, 0, 0, 100],
            ['data2', 130, 0, 140, 200, 0, 50],
          ],
          type: 'area-spline',
          groups: [['data1', 'data2']]
        }
      });

      var chart2 = c3.generate({
        bindto: '#chart2',
        data: {
          columns: [
            ['data1', -300, 350, -300, 0, 0, 100],
            ['data2', -130, 0, 140, -200, 150, -50]
          ],
          type: 'area-spline',
          groups: [['data1', 'data2']]
        }
      });
      var chart3 = c3.generate({
        bindto: '#chart3',
        data: {
          columns: [
            ['data1', 300, 350, 300, 0, 0, 0],
            ['data2', 130, 100, 140, 200, 150, 50]
          ],
          type: 'area-step',
          groups: [['data1', 'data2']]
        }
      });
      var chart4 = c3.generate({
        bindto: '#chart4',
        data: {
          columns: [
            ['data1', -300, 350, -300, 0, 0, 0],
            ['data2', -130, -100, 140, -200, 150, -50]
          ],
          type: 'area-step',
          groups: [['data1', 'data2']]
        }
      });