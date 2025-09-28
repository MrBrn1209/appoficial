import React, { useState } from 'react';
import { MessageCircle, Plus, Search, Clock, User, Reply } from 'lucide-react';
import { ForumPost } from '../types';

export const Forum: React.FC = () => {
  const [posts, setPosts] = useState<ForumPost[]>([
    {
      id: '1',
      userId: '1',
      userName: 'Ana Silva',
      title: 'Dúvida sobre administração de insulina',
      content: 'Gostaria de esclarecer sobre os diferentes tipos de insulina e seus tempos de ação. Alguém pode me ajudar?',
      replies: [
        {
          id: '1',
          userId: '2',
          userName: 'Carlos Santos',
          content: 'A insulina regular tem início de ação em 30-60 minutos, pico em 2-3 horas e duração de 5-8 horas.',
          createdAt: new Date('2024-01-15T10:30:00')
        }
      ],
      createdAt: new Date('2024-01-15T09:00:00')
    },
    {
      id: '2',
      userId: '2',
      userName: 'Maria Oliveira',
      title: 'Protocolo de curativos em feridas cirúrgicas',
      content: 'Qual é o protocolo mais atual para curativos em feridas cirúrgicas limpas?',
      replies: [],
      createdAt: new Date('2024-01-14T14:20:00')
    }
  ]);
  
  const [showNewPost, setShowNewPost] = useState(false);
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPost, setNewPost] = useState({ title: '', content: '' });
  const [newReply, setNewReply] = useState('');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPost.title.trim() && newPost.content.trim()) {
      const post: ForumPost = {
        id: Date.now().toString(),
        userId: '1',
        userName: 'Usuário Atual',
        title: newPost.title,
        content: newPost.content,
        replies: [],
        createdAt: new Date()
      };
      setPosts([post, ...posts]);
      setNewPost({ title: '', content: '' });
      setShowNewPost(false);
    }
  };

  const handleReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReply.trim() && selectedPost) {
      const reply = {
        id: Date.now().toString(),
        userId: '1',
        userName: 'Usuário Atual',
        content: newReply,
        createdAt: new Date()
      };
      
      const updatedPosts = posts.map(post =>
        post.id === selectedPost.id
          ? { ...post, replies: [...post.replies, reply] }
          : post
      );
      
      setPosts(updatedPosts);
      setSelectedPost({ ...selectedPost, replies: [...selectedPost.replies, reply] });
      setNewReply('');
    }
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-emerald-600 hover:text-emerald-700 font-medium"
          >
            ← Voltar ao fórum
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6 mb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
            {selectedPost.title}
          </h1>
          
          <div className="flex items-center text-sm text-gray-500 mb-4">
            <User className="h-4 w-4 mr-2" />
            <span>{selectedPost.userName}</span>
            <Clock className="h-4 w-4 ml-4 mr-2" />
            <span>{formatDate(selectedPost.createdAt)}</span>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            {selectedPost.content}
          </p>
        </div>

        {/* Replies */}
        <div className="space-y-4 mb-6">
          {selectedPost.replies.map((reply) => (
            <div key={reply.id} className="bg-gray-50 rounded-lg p-4 ml-8">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <User className="h-4 w-4 mr-2" />
                <span>{reply.userName}</span>
                <Clock className="h-4 w-4 ml-4 mr-2" />
                <span>{formatDate(reply.createdAt)}</span>
              </div>
              <p className="text-gray-700">{reply.content}</p>
            </div>
          ))}
        </div>

        {/* Reply Form */}
        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Responder
          </h3>
          <form onSubmit={handleReply}>
            <textarea
              value={newReply}
              onChange={(e) => setNewReply(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
              rows={4}
              placeholder="Digite sua resposta..."
              required
            />
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors"
              >
                Responder
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Fórum de Dúvidas</h1>
          <p className="text-gray-600">
            Tire suas dúvidas e compartilhe conhecimento com outros profissionais
          </p>
        </div>
        <button
          onClick={() => setShowNewPost(true)}
          className="bg-emerald-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-emerald-600 transition-colors inline-flex items-center"
        >
          <Plus className="h-5 w-5 mr-2" />
          Nova Pergunta
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-4 shadow-lg mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Pesquisar no fórum..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
          />
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                Nova Pergunta
              </h2>
              
              <form onSubmit={handleCreatePost}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Título
                  </label>
                  <input
                    type="text"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    placeholder="Descreva sua dúvida em poucas palavras"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Descrição
                  </label>
                  <textarea
                    value={newPost.content}
                    onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
                    rows={6}
                    placeholder="Descreva sua dúvida detalhadamente..."
                    required
                  />
                </div>
                
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setShowNewPost(false)}
                    className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-emerald-500 text-white rounded-lg font-medium hover:bg-emerald-600 transition-colors"
                  >
                    Publicar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            onClick={() => setSelectedPost(post)}
            className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-emerald-600 transition-colors">
              {post.title}
            </h3>
            
            <p className="text-gray-600 mb-4 line-clamp-2">
              {post.content}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  <span>{post.userName}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{formatDate(post.createdAt)}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <Reply className="h-4 w-4 mr-2" />
                <span>{post.replies.length} resposta{post.replies.length !== 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {searchTerm ? 'Nenhuma pergunta encontrada' : 'Nenhuma pergunta ainda'}
          </h3>
          <p className="text-gray-600">
            {searchTerm 
              ? 'Tente ajustar sua pesquisa ou faça uma nova pergunta.'
              : 'Seja o primeiro a fazer uma pergunta no fórum!'
            }
          </p>
        </div>
      )}
    </div>
  );
};