# Consulta para obtener todas las imagenes de las misiones

**Method** : `GET`

**Version** : `v3`

**URL** : `https://api.spacexdata.com/v3/launches`

**Storage**   :  `v3.js`

**Modulo** :  `getAllImgMis`

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

Asi se veria en la consola al abrir index.html

```json
[    
	{
        img: 'https://images2.imgbox.com/40/e3/GypSkayF_o.png', 
        img_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png'
    },
    ...
]
```

------

# Consulta para obtener todas las imagenes los cohetes

**Method** : `POST`

**Version** : `v4`

**URL** : `https://api.spacexdata.com/v4/rockets/query`

**Storage**   :  `v4.js`

**Modulo** :  `getAllImgRoc`

**Query** :  

```js
{
    options: {
        select: {
            flickr_images: 1
        }
    }
}
```

**Auth required** : `False`

## Success Responses

**Code** : `200 OK`

```json
[    
	{
        img: [
            "https://imgur.com/DaCfMsj.jpg"
            "https://imgur.com/azYafd8.jpg"
        ]
    },
    ...
]
```