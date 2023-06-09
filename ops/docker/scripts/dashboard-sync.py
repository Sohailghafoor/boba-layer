
import os
import urllib.request

dashboard_list=[
  {
   'name': 'Single Geth',
   'filename': 'single_geth.json',
   'url': 'https://gist.githubusercontent.com/karalabe/1e26f9ea5c842fb118584edadc454e18/raw/6754e6d5c59328e19ad3a8a29a8e7e41fd46e202/geth.json'
  }
]
dashboard_path="/grafana-dashboards"

GF_SECURITY_ADMIN_PASSWORD = os.environ.get('GF_SECURITY_ADMIN_PASSWORD')
if GF_SECURITY_ADMIN_PASSWORD is None:
  print('GF_SECURITY_ADMIN_PASSWORD env value is missing, exiting.')
  sys.exit(1)

if (not os.path.exists(dashboard_path)) or (not os.path.isdir(dashboard_path)) or (not os.access(dashboard_path, os.W_OK)):
  print('Dashboard path %s is not writable, exiting'.format(dashboard_path))
  sys.exit(1)

for dashboard in dashboard_list:
  with urllib.request.urlopen(dashboard['url']) as f:
    response = f.read()
    decoded_html = response.decode('utf-8')
    data = decoded_html.replace('${DS_INFLUXDB}', 'InfluxDB')
    d_file = open(os.path.join(dashboard_path, dashboard['filename']),'w')
    d_file.write(data)
    d_file.close()
