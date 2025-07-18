import requests
import json

# --- Configuración de la API ---
BASE_URL = "http://localhost:5000"
AUTH_ENDPOINT = f"{BASE_URL}/auth/login"
PRODUCTO_ENDPOINT = f"{BASE_URL}/api/producto"

# Credenciales de autenticación
AUTH_DATA = {
    "email": "silvio.giles@gmail.com",
    "password": "aca_esta_la_clave"
}

# --- Variables globales ---
auth_token = None
created_product_id = None # Para guardar el ID de un producto creado y poder usarlo en PUT/DELETE

# --- Función para imprimir resultados ---
def print_response(title, response):
    print(f"\n--- {title} ---")
    print(f"URL: {response.request.url}")
    print(f"Método: {response.request.method}")
    print(f"Status Code: {response.status_code}")
    try:
        print(f"Respuesta JSON: {json.dumps(response.json(), indent=2)}")
    except json.JSONDecodeError:
        print(f"Respuesta Raw: {response.text}")
    print("-" * 30)

# --- 1. Autenticación y Obtención del Token ---
print("🚀 Iniciando pruebas de API...")
print("\n--- Realizando login para obtener el token ---")
try:
    response = requests.post(AUTH_ENDPOINT, json=AUTH_DATA)
    print_response("LOGIN", response)

    if response.status_code == 200:
        auth_token = response.json().get("token")
        if auth_token:
            print(f"✅ Token obtenido: {auth_token[:30]}...") # Mostrar solo una parte del token
        else:
            print("❌ Error: No se recibió token en la respuesta de login.")
    else:
        print("❌ Error en el login. No se podrá continuar con las rutas protegidas.")
        exit()
except requests.exceptions.ConnectionError:
    print("❌ Error de conexión: Asegúrate de que el servidor esté corriendo en http://localhost:5000")
    exit()
except Exception as e:
    print(f"❌ Ocurrió un error inesperado durante el login: {e}")
    exit()

# --- 2. Pruebas de Rutas Protegidas (si hay token) ---
if auth_token:
    headers = {
        "Authorization": f"Bearer {auth_token}",
        "Content-Type": "application/json"
    }

    # --- 2.1. GET todos los productos ---
    try:
        response = requests.get(PRODUCTO_ENDPOINT, headers=headers)
        print_response("GET ALL PRODUCTOS", response)
    except Exception as e:
        print(f"❌ Error al obtener todos los productos: {e}")

    # --- 2.2. POST un nuevo producto ---
    new_product_data = {
        "id": "00002",
        "categoria": "Electrónica",
        "color": "Negro",
        "descrip": "monitor 19 Philips",
        "precio": 19999
    }
    try:
        response = requests.post(PRODUCTO_ENDPOINT, headers=headers, json=new_product_data)
        print_response("POST NUEVO PRODUCTO", response)
        if response.status_code == 201: # Asumiendo un 201 Created
            created_product_id = response.json().get("id") # Asumiendo que la API devuelve el ID del producto creado
            if created_product_id:
                print(f"✅ Producto creado con ID: {created_product_id}")
            else:
                print("⚠️ Advertencia: No se recibió ID del producto creado.")
        else:
            print("❌ Error al crear producto. No se podrá probar PUT/DELETE.")
    except Exception as e:
        print(f"❌ Error al crear producto: {e}")

    # --- 2.3. GET un producto por ID (si se creó uno) ---
    if created_product_id:
        try:
            response = requests.get(f"{PRODUCTO_ENDPOINT}/{created_product_id}", headers=headers)
            print_response(f"GET PRODUCTO por ID ({created_product_id})", response)
        except Exception as e:
            print(f"❌ Error al obtener producto por ID: {e}")

        # --- 2.4. PUT/PATCH un producto existente ---
        updated_product_data = {
            "descrip": "Mouse inalámbrico",
            "precio": 379.99
        }
        try:
            response = requests.put(f"{PRODUCTO_ENDPOINT}/{created_product_id}", headers=headers, json=updated_product_data)
            print_response(f"PUT/PATCH PRODUCTO ({created_product_id})", response)
        except Exception as e:
            print(f"❌ Error al actualizar producto: {e}")

        # --- 2.5. DELETE un producto ---
        try:
            response = requests.delete(f"{PRODUCTO_ENDPOINT}/{created_product_id}", headers=headers)
            print_response(f"DELETE PRODUCTO ({created_product_id})", response)
        except Exception as e:
            print(f"❌ Error al eliminar producto: {e}")
    else:
        print("\n--- ⚠️ No se pudo probar PUT/DELETE porque no se creó un producto exitosamente. ---")

print("\n🎉 Pruebas de API finalizadas.")