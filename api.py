from flask import Flask, request, jsonify
import requests
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)
link = 'https://ecommercebancodedados-default-rtdb.firebaseio.com/'


@app.route('/', methods=['POST'])
def MandarDadosFirebase():
  dadosfront = request.get_json()
  requisicao = requests.post(f'{link}/Anuncios/.json',
                             data=json.dumps(dadosfront))


@app.route('/mandardadosfront')
def MandarDadosFront():
  requisicao = requests.get(f'{link}/.json')
  dados_json = requisicao.json()
  return jsonify(dados_json)


@app.route('/mandarcadastrodouser', methods=['POST'])
def MandarDadosUserFirebase():
  dadosfront = request.get_json()
  requisicao = requests.post(f'{link}/Usuarios/.json',
                             data=json.dumps(dadosfront))


@app.route('/deletardados', methods=['POST'])
def deletardado():
  dadosfront = request.get_json()
  quaseid = dadosfront["headers"]["dadoanuncio"]
  data = json.loads(quaseid)
  id = data["id"]
  requisicao = requests.delete(f'{link}/Anuncios/{id}/.json')
  return 'Dados recebidos e requisição de exclusão enviada com sucesso'


app.run(host='0.0.0.0')

#      console.log(data.Anuncios[idAnunciosnome[0]].id)
