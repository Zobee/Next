import Layout from '../../components/Layout'
import {getAllPostIds, getPostData} from '../../lib/posts'

const Post = ({postData}) => {
  console.log(postData)
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
    </Layout>
  )
}

export default Post

export async function getStaticPaths(){
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}){
  const postData = getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}